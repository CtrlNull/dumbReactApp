import { observable } from 'mobx'
import * as React from 'react'
import Header from '../header';
import { tsConditionalType } from '@babel/types';

export default class Clock extends Header {
    @observable today: Date = new Date()
    @observable hours: number = this.today.getHours();
    @observable minutes: number = this.today.getMinutes();
    @observable seconds: number = this.today.getMinutes();


    render() {
        return(
            <div id="clock"></div>
        )
    }
}