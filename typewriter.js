const sentence = "hello there from lighthouse labs";

sentenceWithDelay = () => {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }

  setTimeout(() => {
    process.stdout.write('\n'); // Add newline after the sentence is printed
  }, sentence.length * 50);
};

sentenceWithDelay();
