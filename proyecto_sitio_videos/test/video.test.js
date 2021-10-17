const request = require('supertest')
const server = require('../app')
const Video = require('../models/video')
const mongoose = require('mongoose')
// const User = require('../models/user')


const userTestOneId = new mongoose.Types.ObjectId()
const cleanDatabase = async () => {
	const video = await Video.find({ nombre: 'Test Video updated' })
	await Video.findByIdAndDelete(video[0]._id)
}


test('Should create new video for user', async () => {
	const response = await request(server.app).post('/api/videos')
		.field('nombre', 'Test Video created one')
		.field('descripcion', 'This is test video One')
		.field('tags', 'tagtest1')
		.field('usuario', '6162dd2660ac4ca556a3289f')
		.field('estado', 'true')
		.field('public', 'true')
		.attach('archivo', 'test/fixtures/conejo.mp4')

		.expect(201)
	const video = await Video.findById(response.body.vid)
	expect(video).not.toBeNull()
	expect(video.estado).toEqual(true)
})

test('Should get videos from DB', async () => {
	const response = await request(server.app).get('/api/videos')
		.send()
		.expect(200)
	const respLength = response.body.Videos.length
	expect(respLength).toBeGreaterThan(0)
})

test('Should get videos by ID from DB', async () => {

	const video = await Video.find({ nombre: 'Test Video created one' })
	const url = '/api/videos/' + video[0]._id
	const response = await request(server.app).get(url)
		.send()
		.expect(200)
	const videoId = response.body.vid
	expect(videoId).toBe((video[0]._id).toString())
})

test('Should edit new video for user', async () => {
	const video = await Video.find({ nombre: 'Test Video created one' })
	const url = '/api/videos/' + video[0]._id
	const response = await request(server.app).put(url)
		.field('nombre', 'Test Video updated')
		.field('descripcion', 'This is test video One')
		.field('tags', 'tagtestupdated')
		.field('public', 'true')
		.expect(200)
	const videoUpdated = await Video.findById(response.body.vid)
	expect(videoUpdated).not.toBeNull()
})


test('Should edit new video for user', async () => {
	const video = await Video.find({ nombre: 'Test Video updated' })
	const url = '/api/videos/' + video[0]._id
	const response = await request(server.app).delete(url)
		.send()
		.expect(200)
	const videoDeleted = await Video.findById(video[0]._id)
	console.log(videoDeleted)
	expect(videoDeleted).not.toBeNull()
})

afterAll(() => {
	return cleanDatabase();
});