const express= require('express');

const app = express();
app.use(express.json())

app.post('/',(req,res)=>{
	const {
		river_velocity,
		person_velocity,
		river_width,
		theta
	} = req.body;

	let time;

	if (theta <= 90) {
		time = river_width / ((person_velocity+river_velocity) * Math.sin(theta))
	} else {
		time = river_width / ((person_velocity - river_velocity) * Math.cos(theta))
	}

	console.log(time)

	res.status(201).json({
		status:'success',
		time
	})
})

const PORT = 3000;

app.listen(PORT,()=>{
	console.log(`Server connected to PORT ${PORT}`);
})