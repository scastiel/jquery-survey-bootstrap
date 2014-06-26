var survey = {
	title: 'signup',
	name: 'signup',
	pages: [
		{
			name: 'generalinfo',
			title: 'Signup',
			elements: [
				{
					name: "firstName",
					type: 'text',
					label: "First Name",
					placeholder: "Your First Name...",
					required: true
				},
				{
					name: "lastName",
					type: 'text',
					label: "Last Name",
					placeholder: "Your Last Name...",
					required: true
				},
				{
					name: "email",
					type: 'email',
					label: "Email Address",
					placeholder: "Your Email Address...",
					required: true
				},
				{
					name: "gender",
					type: 'radio',
					label: "Gender",
					options: [
						{
							key: 'male',
							value: 'Male'
						},
						{
							key: 'female',
							value: 'Female'
						}
					],
					required: true
				},
				{
					type: 'section',
					condition: {
						from: {elem: "[name=gender]:checked"},
						to: 'female'
					},
					elements: [
						{
							type: 'html',
							fragment: 'Girls rule!'
						}
					]
				},
				{
					type: 'section',
					condition: {
						from: {elem: "[name=gender]:checked"},
						to: 'male'
					},
					elements: [
						{
							type: 'html',
							fragment: 'Guys rule!'
						}
					]
				},
				{
					name: "music",
					type: 'checkbox',
					label: "Like music?",
					options: [
						{
							key: 'rock',
							value: 'Rock'
						},
						{
							key: 'folk',
							value: 'Folk'
						},
						{
							key: 'classical',
							value: 'Classical'
						}
					],
					required: true
				},
				{
					name: "favmusic",
					type: 'select',
					label: "Really, your favorite music",
					options: [
						{
							key: 'rock',
							value: 'Rock'
						},
						{
							key: 'folk',
							value: 'Folk'
						},
						{
							key: 'classical',
							value: 'Classical'
						}
					],
					required: true
				},
				{
					name: "content",
					type: "content",
					tag: "blockquote",
					contents: "This is a blockquote!"
				},
				{
					name: "phone",
					type: 'phone',
					label: "Phone number",
					placeholder: "",
					required: true
				}
			],
			options: [
				{
					type: 'prevPage',
					caption: '< Previous'
				},
				{
					type: 'nextPage',
					caption: 'Signup >'
				}
			]
		},
		{
			name: "thanks",
			elements: [
				{
					type: 'handlebars',
					source: '<p>{{data.firstName}}, thanks for your interest.</p>'
				}
			],
		}
	]
};
