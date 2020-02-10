import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <>
                <form>
                    <div class="form-group row">
                        <label for="userName" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="Email" value="userName" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
