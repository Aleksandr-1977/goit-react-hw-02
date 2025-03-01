import { useState, useEffect } from 'react';
import Back from '../HW/Back/back';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

const HW2 = () => {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem('Save Feedback');
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: (prevState[feedbackType] || 0) + 1,
    }));
  };
  useEffect(() => {
    localStorage.setItem('Save Feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const clickReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const positiveFeedback =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;
  return (
    <>
      <Back />
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        clickReset={clickReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
export default HW2;
