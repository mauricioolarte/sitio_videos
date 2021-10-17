const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userTestOneId = new mongoose.Types.ObjectId()
const userOne = {
	_id: userTestOneId,
	name: 'testName userOne',
	email: 'testusernone@example.com',
	password: '12345678',
}

const userTestTwoId = new mongoose.Types.ObjectId()
const userTwo = {
	_id: userTestTwoId,
	name: 'testName userTwo',
	email: 'testusertwo@example.com',
	password: '12345678',
}

const taskOne = {
	_id: new mongoose.Types.ObjectId(),
	description: 'First task',
	completed: false,
	owner: userOne._id
}

const taskTwo = {
	_id: new mongoose.Types.ObjectId(),
	description: 'Second task',
	completed: true,
	owner: userOne._id
}

const taskThree = {
	_id: new mongoose.Types.ObjectId(),
	description: 'Third task',
	completed: true,
	owner: userTwo._id
}

const setupDatabase = async () => {
	await User.deleteMany()
	await Task.deleteMany()
	await new User(userOne).save()
	await new User(userTwo).save()
	await new Task(taskOne).save()
	await new Task(taskTwo).save()
	await new Task(taskThree).save()
}

module.exports = {
	userTestOneId,
	userOne,
	userTestTwoId,
	userTwo,
	taskOne,
	taskTwo,
	taskThree,
	setupDatabase
}