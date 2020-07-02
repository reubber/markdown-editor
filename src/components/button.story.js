import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from './button'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
    <div style={{ display: 'flex', height: 40 }}>
        {story()}
    </div>
))

stories.add('Button danger', () => (
    <Button onClick={action('sucess')} kind='danger'>
        Danger
    </Button>
))



stories.add('Button sucess', () => (
    <Button onClick={action('sucess')} kind='sucess'>
        Sucess
    </Button>
))