import React from 'react';
import './PlacesList.scss';
import Typography from '@material-ui/core/Typography';
// import ImageList from '@material-ui/core/GridList';
import ImageListTile from '@material-ui/core/GridListTile';
import ImageListTileBar from '@material-ui/core/GridListTileBar';
import { Place } from '../../pages/Home/Home';
import { ImageList } from '@material-ui/core'


interface PlaceListProps {
    places: Array<Place>;
}

const PlaceList: React.FC<PlaceListProps> = (props) => {


    return (
        <div className="places-list">
            <Typography variant="h5" className="list-title">
                List of popular places
            </Typography>
            <ImageList className="grid-list" cols={2.5}>
                {props.places.map((place) => (
                    <ImageListTile key={place.id}>
                        <img src={place.imgUrl} alt={place.title} />
                        <ImageListTileBar
                            title={place.title}
                            subtitle={place.description}
                        />
                    </ImageListTile>
                ))}
            </ImageList>
        </div>
    );
};

export default PlaceList;
