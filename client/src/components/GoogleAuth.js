import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn:null}

    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '558926614908-lfjisp9v2b95jmfu6k8ljmulsgfinv7l.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    renderAuthButton(){
        if(this.state.isSignedIn ===null){
            return <div>no idea</div>
        }else if (this.state.isSignedIn){
            return <div>signed in</div>
        }else{
            return <div>unsigned in</div>
        }
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}
export default GoogleAuth;