import { LongPressEvent } from 'react-native-maps';

// инфа о маркере
export interface MarkerData {
    id: string;
    latitude: number;
    longitude: number;
    images: ImageData[];
}

// инфа о картинке
export interface ImageData {
    id: string;
    uri: string;
    date: string;
}

// инфа навигации
export interface MarkerRouteParams {
    id: string;
}

// инфа карты
export interface MapProps {
    markers: MarkerData[];
    onLongPress: (event: LongPressEvent) => void;
    onMarkerPress: (markerId: string) => void;
}