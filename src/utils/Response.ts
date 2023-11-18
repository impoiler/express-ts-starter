import {Response} from 'express'

export default function (res: Response, data: any, statusCode: number) {
	res.status(statusCode).json({
		status: 'success',
		data: data,
	})
}
