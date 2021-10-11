const { Schema, model } = require('mongoose');

const VideoSchema = Schema({
	nombre: {
		type: String,
		required: [true, 'El nombre es obligatorio'],
		unique: true
	},
	estado: {
		type: Boolean,
		default: true,
		required: true
	},
	usuario: {
		type: Schema.Types.ObjectId,
		ref: 'Usuario',
		required: true
	},
	descripcion: { type: String },
	url: { type: String },
	public: {
		type: Boolean,
		default: true,
	},
	tags: [{
		type: String
	}]
});


VideoSchema.methods.toJSON = function () {
	const { __v, estado, _id, ...data } = this.toObject();
	data.vid = _id
	return data;
}


module.exports = model('Video', VideoSchema);