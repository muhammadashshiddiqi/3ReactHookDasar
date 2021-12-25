import React, { Component } from 'react'
import Hitung from '../components/Hitung'

export default class Home extends Component {
    render() {
        return (
            <div style={{padding:'30px'}}>
                <header>Aplikasi Hitung Jumlah Mall Matahari</header>
                <hr />
                <Hitung />
                <hr />
                <footer>
                    <p>Created By Muhammad Ashshiddiqi</p>
                </footer>
            </div>
        )
    }
}
