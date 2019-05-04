import React from 'react';
import Navbar from './layout/NavbarV2';
import { stories } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react/dist/client/preview';

storiesOf('navbar', module)
    .add('default', withInfo()(()=> (
        <Navbar/>
    )));