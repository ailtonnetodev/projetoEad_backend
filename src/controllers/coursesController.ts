import { Request, Response } from "express"
import { CourseService } from "../services/courseService"

export const coursesController = {
    featured: async (req: Request, res: Response) => {
        try {
            const featuredCourses = await CourseService.getRandomFeaturedCourses()
            return res.json(featuredCourses)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    newest: async (req: Request, res: Response) => {
        try {
           const newestCourses = await CourseService.getTopTenNewest()
          return res.json(newestCourses)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

     

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