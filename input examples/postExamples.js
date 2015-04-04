api/profile: example
{
	
	"gender": "male",
	"age": "100",
	
}

Questions/answers example
{
	"question": "The first thing you should do when fitting a backpack is:",
	"answer": "Load the pack with some weight.",
	"badAnswer1": "Adjust the shoulder straps.",
	"badAnswer2": "Buy a matching outfit.",
	"badAnswer3": "Fasten and tighten the hipbelt."
}
{
	"question": "What’s the most important thing to do when breaking in a new pair of hiking boots:",
	"answer": "Treat the leather.",
	"badAnswer1": "Run a steep and rocky trail as fast as you can.",
	"badAnswer2": "Invest in quality insoles and socks.",
	"badAnswer3": "Customize the boot to better fit your foot."
}

api/postAnswer
{	
	"userId": "12345678",
	"question": "question",
	"answer": "answer",
	"isCorrect": "true",
	"correctAnwer": "correctAnwer",
	"supportdata": "supportdata" 
}

userId,
question,
answer,
isCorrect,
selectedAnswer,
supportData,
gender,
age


/api/getAnswer
{
    "userId": "55037e6f1af1c6c56fa12a3d",
    "quizInstanceId" : "0.28282828282828273736",
	"answer": "Load the pack with some weight.",
	"isCorrect": true,
	"question": "The first thing you should do when fitting a backpack is:",
	"selectedAnswer": "Load the pack with some weight.",
	"supportData": "Loading the pack with weight will help ensure proper fit.",
	"age" : "100",
	"gender" : "male"
}
