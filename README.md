# react-blank-component

Blank Component for React App. This is useful for mock, wireframing and creating a skeleton page.

# How to use

## Install

### yarn

`yarn add @gitobi/react-blank-component`

### npm

`npm install @gitobi/react-blank-component --save`

## Sample code

```javascript
import React, { Component } from 'react';
import BlankComponent from '@gitobi/react-blank-component';

class Home extends Component {
  render() {
    return (
      <BlankComponent />
    );
  }
}

export default Home;
```

# Publish

1. `yarn build`
1. `git add .`
1. `git commit -m`
1. `git tag -a v1.0.0 -m 'v1.0.0 release'`
1. `git push origin v1.0.0`
1. `npm publish --access=public`

# License

MIT
