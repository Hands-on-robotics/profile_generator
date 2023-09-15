

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.question("How did you get into coding?", (answer) => {
    console.log(`That's pretty interesting! Thank you for telling me "${answer}"`
    );
  
    rl.question("Oh yes! And what's your name? Nicknames are cool too :)", (answer) => {
      console.log(`That's a nice name! Thank you for filling out this survey, ${answer}.`
      );
    
      rl.question("What was a popular game from when you were a kid?. This helps with our gaming research.", (answer) => {
        console.log(`It's good to know that ${answer} has still made an impression after all these years.`
        );
      
        rl.question("In what ways do you express your creativity, whether through art, writing, music, or other outlets?", (answer) => {
          console.log(`Hmm... after hearing "${answer}", I feel like taking on a hobby of my own.`
          );
        
          rl.question("How many surveys do you think you have filled out over the years?", (answer) => {
            console.log(`"${answer}"! Wow, that's way more than me! I may need to catch up :)`
            );
          
            rl.question("Well, did you enjoy this survey's six questions?", (answer) => {
              console.log(`Thank you for telling us "${answer}". This feedback helps us to make our surveys more engaging.`
              );
            
              rl.close();
            });
          });
        });
      });
    });
  });
});
