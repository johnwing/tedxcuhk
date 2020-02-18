require('dotenv').config();
const sgmail=require("@sendgrid/mail");
sgmail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);
const msg=
{
	to:"asdqwecom6@yahoo.com.hk",
	from:"asdqwecom6@yahoo.com.hk",
	subject:"Test",
	text:"ok?",
	html:"<strong>ok?</strong>",

};
sgmail.send(msg);