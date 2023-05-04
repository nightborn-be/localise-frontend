import { IMiddelwaresProps } from './props';
import useResourcesAPIMiddleware from './ressource-api/hooks';

const Middelwares = ({ children }: IMiddelwaresProps) => {
    // Middlewares
    useResourcesAPIMiddleware();

    // Render
    return children;
};

export default Middelwares;
