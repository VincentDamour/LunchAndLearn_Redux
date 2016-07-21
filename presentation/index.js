// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    CodePane,
    Deck,
    Heading,
    Image,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    flux: require("../assets/flux-ar.png"),
    redux: require("../assets/redux-ar.png")
};

preloader(images);

const theme = createTheme({
    primary: "#F0E6C0"
});

const titleStyle = {
    textShadow: '-0.5px 0.5px 0px #F07818, -1px 1px 0px #5E412F'
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="#F0A830">
                        <Heading size={1} fit caps lineHeight={1} textColor="#FCEBB6" style={titleStyle}>
                            REDUX
                        </Heading>
                    </Slide>
                    <Slide transition={["slide"]} bgColor="#5E412F"
                           notes="You can even put notes on your slide. How awesome is that?">
                        <Heading size={1} caps fit textColor="#F0A830" textFont="primary">
                            Disclaimer
                        </Heading>
                        <Heading size={2} caps fit textColor="#F0A830" textFont="primary">
                            Redux n'est pas la solution à tous les problèmes
                        </Heading>
                        <Heading size={2} caps fit textColor="#F0A830" textFont="primary">
                            Soyer ouvert d'esprit, j'y vais avec l'extrême
                        </Heading>
                    </Slide>
                    <Slide transition={["zoom", "fade"]} bgColor="primary"
                           notes="<ul><li>talk about that</li><li>and that</li></ul>">
                        <Heading size={2} caps fit textColor="#5E412F" textFont="primary">
                            C'est quoi?
                        </Heading>
                        <Heading size={2} caps fit textColor="#5E412F" textFont="primary">Elm + Flux = Redux</Heading>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={1} caps fit textColor="tertiary" textColor="#5E412F">
                            Flux architecture
                        </Heading>
                        <Image src={images.flux.replace("/", "")} margin="2em auto 40px" width="100%"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={1} caps fit textColor="tertiary" textColor="#5E412F">
                            Redux architecture
                        </Heading>
                        <Image src={images.redux.replace("/", "")} margin="20px auto 40px" width="85%"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={1} caps fit textColor="#5E412F">
                            Redux et ses principles
                        </Heading>
                        <Text textColor="#5E412F">Ne pas les respecter c'est un péché</Text>
                        <List>
                            <Appear><ListItem textSize="2em" textColor="#5E412F">Single source of
                                truth</ListItem></Appear>
                            <Appear><ListItem textSize="2em" textColor="#5E412F">State is read-only</ListItem></Appear>
                            <Appear><ListItem textSize="2em" textColor="#5E412F">Changes are made with pure
                                functions</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={2} caps textColor="tertiary" textColor="#5E412F">
                            Action
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/action.example")}
                            margin="20px auto"
                            textSize="0.7em"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={2} caps textColor="tertiary" textColor="#5E412F">
                            Action creator
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/action-creator.example")}
                            margin="20px auto"
                            textSize="0.6em"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={2} caps textColor="tertiary" textColor="#5E412F">
                            Reducer
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/reducer.example")}
                            margin="20px auto"
                            textSize="0.55em"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={2} caps textColor="tertiary" textColor="#5E412F">
                            State
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/state.example")}
                            margin="20px auto"
                            textSize="0.6em"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={1} caps textColor="#5E412F" textSize="5em">
                            View
                        </Heading>
                        <Heading size={2} caps fit textColor="tertiary" textColor="#5E412F" margin="30px auto 0">
                            Smart component, dump component
                        </Heading>
                        <Heading size={2} caps fit textColor="tertiary" textColor="#5E412F">
                            containers, component, HOC ...
                        </Heading>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={2} caps textColor="tertiary" textColor="#5E412F">
                            Map state to props
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/map-state.example")}
                            margin="20px auto"
                            textSize="0.65em"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={2} caps textColor="tertiary" textColor="#5E412F">
                            Selector
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/selector.example")}
                            margin="20px auto"
                            textSize="0.55em"/>
                    </Slide>
                    <Slide transition={["slide"]}>
                        <Heading size={2} caps textColor="tertiary" textColor="#5E412F">
                            Les pros et les cons
                        </Heading>
                        <Text>Très, très, très, très facile à tester</Text>
                        <Text>Rend le back-end plus léger</Text>
                        <Text>Extrêmement simple à utiliser</Text>
                        <Text>Learning curve</Text>
                        <Text>Réduis les risques d'erreurs</Text>
                        <Text>Taille et performance</Text>
                        <Text>Grande communauté</Text>
                        <Text>Customizable</Text>
                        <Text>Easy to Learn, Write, Read, Architect, Maintain and Debug</Text>
                        <Text>Sépare le code de présentation du code functionnel</Text>
                        <Text>Permet de deviner les changements et éviter des calls au serveur</Text>
                    </Slide>
                    <Slide transition={["zoom"]} bgColor="#F0A830">
                        <Heading size={1} fit caps lineHeight={1} textColor="#FCEBB6" style={titleStyle}>
                            MERCI!
                        </Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
