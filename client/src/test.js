import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import store from './store/DataStore'

const Test = inject('store')(observer(class Test extends Component {
    render () {
        return (
            <div>
            <h1>test</h1>
            <button onClick={ () => { store.doThis() } }>A new BIG button</button>
            </div>
        )
    }
}))

export default Test;
