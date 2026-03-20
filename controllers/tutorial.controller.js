const prisma = require('../lib/prisma');

/**
 * /tutorials
 * Optional query filters:
 * - ?category=oil-change
 * - ?modelId=1
 */
const getAllTutorials = async (req, res) => {
    const { category, modelId } = req.query;
    try {
        const tutorials = await prisma.tutorial.findMany({
            where: {
                // Filter by category slug if provided
                category: category
                    ? {
                        slug: category,
                    }
                    : undefined,

                // Filter by modelId if provided
                modelId: modelId ? parseInt(modelId) : undefined,
            },
            include: {
                model: {
                    include: {
                        manufacturer: true,
                    },
                },
                category: true,
            },
        });

        res.status(200).json({
            success: true,
            count: tutorials.length,
            data: tutorials,
        });
    } catch (error) {
        console.error('Error fetching tutorials:', error);

        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

module.exports = {
    getAllTutorials,
};