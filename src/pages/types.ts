import { RouteProps } from 'react-router-dom';

export type RouteData = Pick<RouteProps, 'path' | 'element'> & { key: string };