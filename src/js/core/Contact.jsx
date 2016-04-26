import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';

import ReactDOM                 from 'react-dom';
import ReactTooltip             from 'react-tooltip';

import FixedBackground           from 'component/FixedBackground';
import SideMenu                  from 'component/SideMenu';
import ShareMenu                 from 'component/ShareMenu';
import ScrollProgress            from 'component/ScrollProgress';
import VideoHandler              from 'component/VideoHandler';
import CountDown                 from 'component/CountDown';
import KeyPress                  from 'component/KeyPress';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Images                   from 'config/image';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';

import {hexagon}                from './Hexagon.jsx';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Gmap                     from 'config/gmap';

export default class Contact extends Component {
  
      onMapCreated(map) {
        map.setOptions({
          disableDefaultUI: true,
          styles: Gmap.style,
          scrollwheel:  false,
          draggable: false,
          disableDoubleClickZoom: false,
          zoomControl: false
        });
      }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {

        var coords = {
            lat: "49.133333",
            lng: "6.166667"
        }

        return (
            <div className="screen-box contact">
                <ScrollProgress/>
                <FixedBackground position="fixed-background-vitrine" image="images/background/animated/sunrise.gif">
                    <div className="page punchline">
                        <h1>Venez dire bonjour !</h1>
                    </div>
                </FixedBackground>

                <div className="page double-padding">
                    <div className="row row-gutter row-auto-height">
                        <div className="cell">
                            <div className="dot-animation"/>
                            <Gmaps
                            width={'100%'}
                            height={'400px'}
                            lat={coords.lat}
                            lng={coords.lng}
                            zoom={12}
                            loadingMessage={'Be happy'}
                            params={{v: '3.exp', styles: Gmap.style}}
                            onMapCreated={this.onMapCreated}>
                                <Marker
                                  lat={coords.lat}
                                  lng={coords.lng} />
                          </Gmaps>
                        </div>
                        <div className="cell text-center">
                            <div>
                                <img className="map" src="images/agence/map.svg"/>
                                <h2>Coordonnées</h2>
                                <p>BLUESCREEN SAS<br/> 13, rue Saint Gengoulf<br/> 57000 METZ <br/>–<br/> <a href="#">06.59.57.86.09</a> <br/> <a href="mailto:ecrire@bluescreen.co">ecrire@bluescreen.co</a> </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

