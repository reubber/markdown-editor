import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SaveMessage from './save-message'

const stories = storiesOf('SaveMessage', module)

stories.add('save message com saving === null', () => (
    <div style={{background: '#ccc'}}>
        Message: "<SaveMessage isSaving={null}/>"
    </div>
))

stories.add('save message com saving === true', () => (
    <div style={{background: '#ccc'}}>
        Message: "<SaveMessage isSaving/>"
    </div>
))

stories.add('save message com saving === false', () => (
    <div style={{background: '#ccc'}}>
        Message: "<SaveMessage isSaving={false}/>"
    </div>
))