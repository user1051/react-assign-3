import { Component } from "react";

class App extends Component {
	state = {
		name: "",
		dept: "",
		rating: "",
		emp: [],
		show: true,
	};
	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const obj = {
			key: Math.floor(Math.random() * 10 + 1),
			name: this.state.name,
			dept: this.state.dept,
			rating: this.state.rating,
		};
		this.setState({ show: false });
		const tempArr = this.state.emp;
		tempArr.push(obj);
		this.setState({ emp: tempArr });
		console.log(tempArr);
	};
	render() {
		const { name, dept, rating } = this.state;
		const isEnabled = name.length > 0 && dept.length > 0 && rating > 0;
		return (
			<div className="flex flex-col items-center w-full h-screen bg-gradient-to-b from-indigo-300 via-pink-300 to-purple-500">
				{this.state.show ? (
					<>
						<h1 className="text-4xl uppercase font-medium">
							Employee Feedback form
						</h1>
						<form className="h-2/5 mt-6 flex flex-col">
							<div className="flex mt-4 items-center">
								<p className="text-lg">Name :</p>
								<input
									id="name"
									name="name"
									type="text"
									className="outline-none border-2 border-slate-700 rounded-3xl p-2 bg-cyan-200"
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</div>
							<div className="flex mt-4 items-center">
								<p className="text-lg">Department :</p>
								<input
									name="dept"
									type="text"
									value={this.state.dept}
									onChange={this.handleChange}
									className="outline-none border-2 border-slate-700 rounded-3xl p-2 bg-cyan-200"
								/>
							</div>
							<div className="flex mt-4 items-center">
								<p className="text-lg">Rating :</p>
								<input
									type="number"
									name="rating"
									value={this.state.rating}
									onChange={this.handleChange}
									className="outline-none border-2 border-slate-700 rounded-3xl p-2 bg-cyan-200"
								/>
							</div>
							<button
								disabled={!isEnabled}
								onClick={this.handleSubmit}
								className="mt-6 font-medium border-2 border-slate-700 rounded-3xl bg-cyan-400 p-2 text-lg hover:bg-cyan-300"
							>
								SUBMIT
							</button>
						</form>
					</>
				) : (
					// {this.state.show && (
					<>
					<h1 className="text-4xl uppercase font-medium">
							Employee Feedback Data
						</h1>
						<div className="m-10 max-w-max flex flex-wrap border-2 border-slate-700 bg-indigo-300">
							{this.state.emp.map((i) => (
								<div className="m-6 border-2 border-slate-700 rounded-3xl bg-pink-300">
									<p className="p-6 text-lg font-medium">
										Name: {i.name} | Department: {i.dept} | Rating: {i.rating}
									</p>
								</div>
							))}
						</div>
						<button
							onClick={(e) => {
								e.preventDefault();
								this.setState({ show: true });
							}}
							className="mt-6 w-1/6 font-medium border-2 border-slate-700 rounded-3xl bg-cyan-400 p-2 text-lg hover:bg-cyan-300"
						>
							Go Back
						</button>
					</>
					// )}
				)}
			</div>
		);
	}
}
export default App;
