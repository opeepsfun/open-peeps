# @opeepsfun/open-peeps

![npm](https://img.shields.io/npm/v/@opeepsfun/open-peeps)
![license](https://img.shields.io/npm/l/@opeepsfun/open-peeps)

## Description

This is an npm package for Open Peeps, a collection of hand-drawn illustrations. You can use Open Peeps in product illustration, marketing imagery, comics, product states, user flows, personas, storyboarding, invitations for your quinceañera...or anything else you want!

## Try it

You can test and experience the library by using the [official builder](https://beta.opeeps.fun/collections/open-peeps). Explore various options, customize characters, and see all the features in action for more details and a hands-on experience with the components.

## Installation

To install this package, run the following command:

```bash
npm install @opeepsfun/open-peeps
```

## Usage

Here's a simple example to get you started:

```javascript
import { Effigy } from "@opeepsfun/open-peeps";

const bodyDetails = {
    type: "SomeBodyType",
    options: {
        /*...some options...*/
    }
};

const headDetails = {
    type: "SomeHeadType",
    options: {
        /*...some options...*/
    }
};

const faceDetails = {
    type: "SomeFaceType",
    options: {
        /*...some options...*/
    }
};

<Effigy body={bodyDetails} head={headDetails} face={faceDetails} />;
```

In this example, `type` is a string representing the type of piece you want to create (for example, "Explaining" for body type), and `options` is an object containing key-value pairs that represent the options for that piece. The keys and available options depend on the type of the piece.

## Features

1. **Composable:**
    - The `Effigy` component allows you to compose different pieces together to create a character. Each piece is defined by a `type` and a set of `options`.
2. **Customizable:**
    - Each piece can be customized using the `options` prop to define different characteristics, styles, or properties depending on the piece type.
3. **Optional Pieces:**
    - Pieces like `beard`, `mask`, and `accessory` are optional, allowing for the creation of diverse characters.
4. **Transformations:**
    - The `Effigy` component handles various transformations to position and scale the different pieces together harmoniously. There will be `Sitting` and `Standing` components too. Coming soon!
5. **Dynamic Importing:**
    - The component dynamically imports the necessary elements based on the `type` provided, making it versatile and optimized.

### Components and Props

Here are the details of the props that the `Effigy` component accepts:

-   **body:** Required. Represents the body of the character.
-   **head:** Required. Represents the head or hair of the character.
-   **face:** Required. Represents the face of the character.
-   **beard:** Optional. Represents the beard of the character if any.
-   **mask:** Optional. Represents the mask of the character if any.
-   **accessory:** Optional. Represents any accessory of the character if any.
-   **style:** Optional. Accepts a `React.CSSProperties` object to apply styles to the SVG element.

Each of the piece props (like `body`, `head`, etc.) should be an object containing:

-   **type:** String. Specifies the type of the piece.
-   **options:** Object. Specifies additional options and properties for the piece.

### Example Types and Options

Here are some example `type` and `options` you can use for different pieces:

```javascript
const bodyDetails = {
    type: "Explaining",
    options: { color: "blue" }
};

const headDetails = {
    type: "Bald",
    options: { color: "brown" }
};

const faceDetails = {
    type: "Smiling",
    options: { eyeColor: "green" }
};

const beardDetails = {
    type: "FullMedium",
    options: { color: "black" }
};

const accessoryDetails = {
    type: "Eyepatch",
    options: { color: "black" }
};

<Effigy body={bodyDetails} head={headDetails} face={faceDetails} beard={beardDetails} accessory={accessoryDetails} />;
```

These are just example types and options; refer to the component documentation or source code for the full list of available types and options for each piece.

## Build

To build the project, run:

```bash
npm run build
```

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

MIT

## Author

-   Emre Çakır
-   [Homepage](https://opeeps.fun)
