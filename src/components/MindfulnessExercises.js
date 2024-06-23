import React from 'react';
import './MindfulnessExercises.css'; // Import your CSS file for styling

const MindfulnessExercises = () => {
  const exercises = [
    {
      number: "1",
      title: "Three-minute breathing space",
      description: "This quick exercise takes just three minutes to do, making it realistic for those busy, busy days. According to Dr. Vieten, it’s commonly used in mindfulness-based cognitive therapy, a type of therapy that has been shown to improve symptoms of stress, anxiety, and depression.",
      steps: [
        " --> Set a timer for three minutes.",
        " --> Sit in a comfortable position if you can (though standing works too), ideally in a relatively calm environment (the bathroom counts), and close your eyes if you want. Notice what’s happening in your mind and body right now. Are you worrying about a problem or mistake? Do you feel warm or cold? Is there a distracting sound in your environment? Simply notice whatever you’re experiencing at the moment.",
        " --> Bring your full attention to your breath, focusing on the sensation of the air flowing in and out of your body.",
        " --> Expand your zone of awareness further out from your breathing so that it includes your whole body. You might notice your posture, your facial expression, or areas of muscle tension. Again, simply pay attention to whatever’s going on with your body."
      ]
    },
    {
      number: "2",
      title: "Listening mindfulness",
      description: "For Dr. Urgola, zeroing in on sounds is one of her favorite ways to implement mindful living. It involves focusing on a specific sound in your current environment—whether that’s on a bus, say, or in your kitchen—for several minutes. “Maybe it’s something obvious and loud, or maybe it’s something in the background,” says Dr. Urgola. Anything goes, really.",
      steps: [
        " --> Close your eyes if it feels good. If not, find a spot in your space to softly gaze at (relax your eyes and don’t focus on anything specific).",
        " --> Listen deeply to that sound. Take note of its tone (Is it soft? Buzzy? Harsh?), rhythm (maybe it’s steady or irregular), and volume.",
        " --> Stay with the sound as best you can. If your mind wanders off, that’s okay; just acknowledge that and come back to the sound. You can even imagine your distracting thoughts drifting away from you on a balloon or floating down a stream on a leaf, suggests Dr. Urgola.",
        " --> End the exercise whenever you feel ready to stop."
      ]
    },
    {
      number: "3",
      title: "Dishwashing",
      description: "Yes, you read that right. Hear us out: Instead of doing chores on autopilot, why not use them as opportunities to practice awareness? It’s a small, yet impactful way to check in with yourself, even as you do other tasks, Dr. Urgola says.",
      steps: [
        " --> As you wash the dishes, ask yourself: How warm or cold is the water? How does the sponge feel in my hand? What smells am I experiencing? What’s the texture of the dishes I’m touching?",
        " --> If your mind drifts off, again, that’s totally okay (and normal). “Your brain is doing what it has evolved to do: think,” says Dr. Urgola. Simply notice the drifting then come back to focusing on the dishes. (You can also do this in the shower, FYI)."
      ]
    },
    {
      number: "4",
      title: "Body scan",
      description: "“The quick body scan consists of focusing on the different areas of your body one by one, from your feet to your head, and then back down to your feet,” Dr. Vieten explains. “This practice is particularly great when you’re feeling anxious, agitated, nervous, or scattered.”",
      steps: [
        " --> Close your eyes or maintain a soft gaze (again, where your eyes are relaxed and you’re not focusing on anything in particular).",
        " --> Bring your attention to the bottom of your feet, followed by your toes, the tops of your feet, your heels, and your ankles. Notice what you’re sensing in each area—think tightness, coldness, a tingling sensation, or nothing at all—without judging it as good or bad.",
        " --> Move deliberately up your body—to your calves, knees, thighs, hips, etc.—and do the same thing: Notice the physical sensations in each section with curious attention.",
        " --> When you come to the top of your head, you can either stop or travel back down to your feet again, the same way you came.",
        " --> Need a little more direction? You can check out the UCSD Center for Mindfulness website for guided body-scan recordings, Dr. Vietan says."
      ]
    },
    {
      number: "5",
      title: "Four-seven-eight mindful breathing",
      description: "The four-seven-eight mindfulness technique is a type of deep breathing exercise. It’s particularly handy for anxiety, as feeling anxious can deregulate our breathing patterns, says Dr. Urgola.",
      steps: [
        " --> Close your eyes if it feels comfortable. If not, gaze softly gaze at a spot in your environment.",
        " --> Inhale for a count of four.",
        " --> Hold for a count of seven.",
        " --> Exhale for a count of eight.",
        " --> Make sure you’re breathing deeply, from the pit of your belly (compared to shallow breathing from your chest) so your lungs fill up fully.",
        " --> Stay with this pattern as best you can.",
        " --> End the exercise whenever you feel ready to stop."
      ]
    },
    {
      number: "6",
      title: "People-watching",
      description: "You can turn your commute or leisurely walk into a mini mindfulness session by noticing strangers around you. Dr. Urgola, who adapted this exercise from Mindfulness Cards: Simple Practices for Everyday Life ($12, Amazon), sometimes suggests it to her clients and describes it as “a way to pull ourselves out of our heads.” When you notice people, it creates an opportunity to detach from your own mental chatter, allowing you to practice awareness without actually meditating.",
      steps: [
        " --> Take a moment to notice the people around you.",
        " --> As you observe them, try not to form judgments or stories about them. If your mind starts to judge or assume, try to let those thoughts go and bring your focus back to a neutral awareness.",
        " --> If you feel comfortable, you can also try engaging one or more strangers. Maybe say hello, make eye contact, or offer a smile.",
        " --> If not, that’s fine too. Simply observe whoever is currently around you."
      ]
    },
    {
      number: "7",
      title: "Group drawing",
      description: "If you have children, the notion of setting aside personal time for mindfulness exercises might seem unattainable—laughable even. But who says the little people can’t get involved? With a family exercise like group drawing, you can “practice the concept of nonjudgment, one of the components of mindfulness,” says Dr. Urgola.",
      steps: [
        " --> For this mindful activity, you’ll need a piece of paper and drawing supplies (think colored pencils or crayons) for each person.",
        " --> Set a timer for one minute.",
        " --> Start drawing something (anything!) on your piece of paper.",
        " --> When the time is up, pass the paper to the person on your left.",
        " --> Reset the timer. The person who got your paper will now add to your drawing for another minute.",
        " --> Continue drawing and passing along in one-minute intervals until all the papers are returned to their original owners.",
        " --> During this exercise, notice any judgments about the activity, the drawing you were just handed, how you’re drawing, or what the drawing will look like in the end. Acknowledge and let them go, allowing yourself to focus on the task at hand."
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="mindfulness-container">
        <h2 className="mindfulness-title">Mindfulness Exercises</h2>
        <div className="mindfulness-text-container">
          {exercises.map((exercise, index) => (
            <div key={index}>
              <p>
                <span className="pointer">{exercise.number}. </span>
                <i><u>{exercise.title}</u></i><br />
                {exercise.description}<sup>{exercise.reference}</sup><br /><br />
                <b><i>Here’s how to practice the {exercise.title} technique:</i></b>
                <ul>
                  {exercise.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </p>
              {index !== exercises.length - 1 && <br />} {/* Add <br /> except after the last exercise */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MindfulnessExercises;