import { errorHandler, jwtMiddleware } from 'helpers/api'

export { apiHandler }

function apiHandler(handler) {
    console.log("🚀 ~ file: api-handler.js:6 ~ apiHandler ~ handler:", handler)
    
    return async (req, res) => {
        const method = req.method.toLowerCase()

        // check handler supports HTTP method
        if (!handler[method])
            return res.status(405).end(`Method ${req.method} Not Allowed`)

        try {
            // global middleware
            await jwtMiddleware(req, res)

            // route handler
            await handler[method](req, res)
        } catch (err) {
            // global error handler
            errorHandler(err, res)
        }
    }
}
