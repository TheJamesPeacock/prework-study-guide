var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topic[x]);
 }
}

function selectTopic() {
    if (topics === 'HTML') {
      console.log("Let's study HTML!");
    } else if (topics === 'CSS') {
      console.log("Let's study CSS!");
    } else if (topics === 'Git') {
      console.log("Let's study Git!");
    } else if (topics === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }
listTopics()
selectTopic()
