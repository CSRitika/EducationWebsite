export type OurCoursesDataProps  = {
    id: number;
    title: string;
    titleImage: string;
    courses: ParticularCourseProps[];
    duration?: number;
};

export type ParticularCourseProps = {
    id: number;
    name: string;
    image: string;
    price: number;
    duration: number;
    startDate: Date,
    description: string;
}

export type BuyCourseDataProps = {
    category: string;
    description: string;
    duration: number;
    id: number;
    image: string;
    name: string;
    price: number;
    startDate: Date,
}