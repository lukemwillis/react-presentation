// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    CodePane,
    Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/style.css");


const images = {
    react: require("../assets/react.svg"),
    redux: require("../assets/redux.png"),
    pariveda: require("../assets/pariveda.png"),
    facebook: require("../assets/facebook.png")
};

preloader(images);

const logos = [
    // trulia, new york times, tesla, stack overflow, squarespace, salesforce, redfin, reddit, producthunt, pinterest, periscope, paypal, NFL, netflix, nbc, nhl, lyft, intuit, instagram, instacart, imdb, imgur, expedia, ebay, dropbox, atlassian, bbc, asana, airbnb, angie's list, amc, zillow, thumbtack, wired, visa, uber, twitter
];

const theme = createTheme({
    primary: "#ffffff",
    secondary: "#13558c",
    tertiary: "#236b9c",
    quartenary: "#bab7ae"
}, {
    primary: {
        name: "Source Sans Pro",
        googleFont: true,
        styles: [ "900" ]
    },
    secondary: {
        name: "Source Sans Pro",
        googleFont: true,
        styles: [ "400" ]
    },
    monospace: {
        name: "Source Code Pro",
        googleFont: true,
        styles: [ "400" ]
    }
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["fade"]} progress="none" transitionDuration={100} theme={theme}>
                <Slide bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Spectacle Boilerplate
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        open the presentation/index.js file to get started
                    </Text>
                    <Image src={images.pariveda} />
                </Slide>
                <Slide bgColor="secondary">
                    <CodePane
                        lang="jsx"
                        source={require("raw-loader!../assets/deck.example")}
                    />
                </Slide>
                <Slide bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>Typography</Heading>
                    <Heading size={1} textColor="secondary">Heading 1</Heading>
                    <Heading size={2} textColor="secondary">Heading 2</Heading>
                    <Heading size={3} textColor="secondary">Heading 3</Heading>
                    <Heading size={4} textColor="secondary">Heading 4</Heading>
                    <Heading size={5} textColor="secondary">Heading 5</Heading>
                    <Text size={6} textColor="secondary">Standard text</Text>
                </Slide>
                <Slide bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Standard List</Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        );
    }
}
