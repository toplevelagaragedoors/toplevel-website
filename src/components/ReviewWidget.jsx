import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// "Leave Us A Review" funnel (GS Marketing review tool). 4-5 stars go to the
// Google review page; lower ratings open a private feedback form that posts to
// the business's own endpoint. Endpoints and the Google place link are the
// client's own. Implemented in React so it hydrates cleanly in the SPA.
const REVIEW_LINK = 'https://search.google.com/local/writereview?placeid=ChIJV-AOlCqOuaoR-WFmMieNl_E';
const BUSINESS_EMAIL = 'topleveldoorsandgatessc@gmail.com';
const BUSINESS_NAME = 'Top Level Garage Door';
const PLATFORM = 'google';
const MIN_RATING = 4;
const FEEDBACK_ENDPOINT = 'https://reviewtool.gsmarketingroup.com/api/send-feedback';
const TRACK_ENDPOINT = 'https://reviewtool.gsmarketingroup.com/api/track-event';

function track(eventType, extra) {
  if (typeof window === 'undefined') return;
  try {
    const payload = {
      businessEmail: BUSINESS_EMAIL,
      businessName: BUSINESS_NAME,
      platform: PLATFORM,
      eventType,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      referrer: document.referrer || '',
      reviewLink: REVIEW_LINK,
      widgetUrl: window.location.href,
      ...(extra || {}),
    };
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon(TRACK_ENDPOINT, new Blob([body], { type: 'application/json' }));
    } else {
      fetch(TRACK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch (e) {
    /* ignore tracking errors */
  }
}

export default function ReviewWidget() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [mode, setMode] = useState('rate'); // rate | feedback | thanks
  const [feedback, setFeedback] = useState('');
  const [sending, setSending] = useState(false);

  const openPopup = (source) => {
    setMode('rate');
    setRating(0);
    setFeedback('');
    setOpen(true);
    track('widget_open', { source: source || 'button' });
  };
  const closePopup = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add('is-locked');
    const onKey = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Open automatically when the page is reached at #review.
  useEffect(() => {
    const check = () => {
      if ((window.location.hash || '').toLowerCase().split('?')[0] === '#review') openPopup('hash');
    };
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitReview = () => {
    if (!rating) return;
    if (rating >= MIN_RATING) {
      track('review_redirect', { rating });
      window.location.href = REVIEW_LINK;
    } else {
      setMode('feedback');
    }
  };

  const submitFeedback = () => {
    if (!feedback.trim() || sending) return;
    setSending(true);
    fetch(FEEDBACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        businessName: BUSINESS_NAME,
        businessEmail: BUSINESS_EMAIL,
        customerRating: rating || 0,
        customerFeedback: feedback,
        platform: PLATFORM,
        timestamp: new Date().toISOString(),
      }),
      keepalive: true,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to send feedback');
        track('feedback_submit', { rating: rating || 0 });
        setMode('thanks');
      })
      .catch(() => {
        alert('Sorry, there was a problem sending your feedback. Please try again.');
      })
      .finally(() => setSending(false));
  };

  return (
    <>
      <button type="button" className="btn btn--fx" onClick={() => openPopup('button')}>
        Leave Us A Review <span className="plus">+</span>
      </button>

      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="rlg-popup-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) closePopup();
            }}
          >
          <div className="rlg-popup-content" role="dialog" aria-modal="true" aria-label="Leave us a review">
            <button type="button" className="rlg-close" aria-label="Close" onClick={closePopup}>
              &times;
            </button>
            <div className="rlg-review-container">
              <h3>Top Level Garage Door</h3>

              {mode === 'rate' && (
                <>
                  <p>We value your feedback! Please rate our service.</p>
                  <div className="rlg-star-rating-wrapper">
                    <div className="rlg-star-rating" role="radiogroup" aria-label="Rating">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          type="button"
                          className={`rlg-star${rating >= n ? ' is-on' : ''}`}
                          aria-label={`${n} star${n > 1 ? 's' : ''}`}
                          aria-pressed={rating === n}
                          onClick={() => setRating(n)}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    <button type="button" className="rlg-submit-btn" onClick={submitReview}>
                      Submit Review
                    </button>
                  </div>
                  <div className="rlg-review-content">
                    <strong>Jordan Lee</strong>
                    <div className="rlg-stars" role="img" aria-label="Rated 5 out of 5 stars">
                      ★★★★★
                    </div>
                    <span className="rlg-time">5 days ago</span>
                    <p>
                      Top Level Garage Door are super easy to work with, 10/10 from start to finish.
                      Highly recommended.
                    </p>
                  </div>
                </>
              )}

              {mode === 'feedback' && (
                <div className="rlg-feedback-form">
                  <h3>Your Feedback</h3>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Please let us know how we can improve our service..."
                  />
                  <button type="button" className="rlg-submit-btn" onClick={submitFeedback} disabled={sending}>
                    {sending ? 'Sending…' : 'Submit Feedback'}
                  </button>
                </div>
              )}

              {mode === 'thanks' && (
                <div className="rlg-thank-you">
                  <p className="rlg-thank-you__check">✓</p>
                  <p>Thank you for your feedback!</p>
                </div>
              )}
            </div>
          </div>
          </div>,
          document.body
        )}
    </>
  );
}
