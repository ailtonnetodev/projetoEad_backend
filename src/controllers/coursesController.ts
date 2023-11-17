import { Request, Response } from "express"
import { CourseService } from "../services/courseService"

export const coursesController = {
    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const course = await CourseService.findByIdWithEpisodes(id)
            return res.json(course)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}