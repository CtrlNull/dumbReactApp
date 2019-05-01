import { observable } from 'mobx'
import * as React from 'react'
import Body from '../body';

export default class Header extends Body{

    render() {
        return (
            <header className="container">
                <div className="row">
                    <div className="col-sm">Logo</div>
                    <div className="col-sm">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Test</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </header>
        )
    }
}