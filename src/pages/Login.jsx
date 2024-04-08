import React, { Component } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos del formulario a tu backend
        console.log('Email:', this.state.email);
        console.log('Password:', this.state.password);
    }

    render() {
        return (
            <main className="flex items-center justify-center w-full min-h-screen primary-extra-light">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl font-semibold mb-4">Iniciar Sesión</h1>
                            <form className="w-full max-w-sm" onSubmit={this.handleSubmit}>
                                <div className="mb-4">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        placeholder="Email"
                                        className="mt-2 mb-4 rounded-full p-2 w-full border border-gray-300"
                                    />
                                </div>
                                <div className="mb-6">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        placeholder="Contraseña"
                                        className="mt-2 mb-4 rounded-full p-2 w-full border border-gray-300"
                                    />
                                </div>
                                <Button type="submit" className="w-full mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition duration-300 py-2 px-4">Iniciar Sesión</Button>
                            </form>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img
                                className="max-h-full w-auto"
                                src="https://images.pexels.com/photos/5255249/pexels-photo-5255249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Login Image"
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Login;
