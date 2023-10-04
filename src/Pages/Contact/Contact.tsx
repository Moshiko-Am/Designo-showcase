import React, { useEffect, useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import AboutLocations from '../../components/About/AboutLocations.tsx';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

interface IContact {}

const Contact: React.FC<IContact> = () => {
	const BEMBlock = 'contact-page';

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		message: '',
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email').required(`Can't be empty`),
		phone: Yup.string(),
		message: Yup.string().required('Message is required'),
	});

	const contactRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contactRef) {
			window?.scrollTo({ top: -128, left: 0, behavior: 'smooth' });
		}
	}, [contactRef]);

	return (
		<motion.div
			ref={contactRef}
			className={generateBEMClassName({ block: BEMBlock, utilities: 'page' })}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'contact-form-wrapper' })}>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'text-container' })}>
					<h1 className={generateBEMClassName({ block: BEMBlock, element: 'title' })}>Contact Us</h1>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'description' })}>
						Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If
						you are looking for unique digital experiences that’s relatable to your users, drop us a line.
					</p>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'form-container' })}>
					<Formik
						initialValues={initialValues}
						onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
						validationSchema={validationSchema}
					>
						{({ handleChange, handleBlur, errors, touched, isValid }) => (
							<Form className={generateBEMClassName({ block: BEMBlock, element: 'form' })} autoComplete={'off'} spellCheck={false}>
								<div className={generateBEMClassName({ block: BEMBlock, element: 'form-group' })}>
									<input
										type='text'
										name='name'
										id='name'
										className={generateBEMClassName({ block: BEMBlock, element: 'form-input' })}
										placeholder='Name (required)'
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									<div className={generateBEMClassName({ block: BEMBlock, element: 'error-container' })}>
										{touched?.name && errors?.name && (
											<>
												<span
													className={generateBEMClassName({
														block: BEMBlock,
														element: 'error',
													})}
												>
													{errors.name}
												</span>
												<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
													<g fill='none' fillRule='evenodd'>
														<circle cx='10' cy='10' r='10' fill='#FFF' />
														<path fill='#E7816B' d='M11 14v2H9v-2h2zm0-9v7H9V5h2z' />
													</g>
												</svg>
											</>
										)}
									</div>
								</div>
								<div
									className={generateBEMClassName({
										block: BEMBlock,
										element: 'form-group',
										modifier: [
											'email',
											{
												name: 'error',
												condition: !!(touched?.email && errors?.email),
											},
										],
									})}
								>
									<input
										type='email'
										name='email'
										id='email'
										className={generateBEMClassName({ block: BEMBlock, element: 'form-input' })}
										placeholder='Email Address (required)'
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									<div className={generateBEMClassName({ block: BEMBlock, element: 'error-container' })}>
										{touched?.email && errors?.email && (
											<>
												<span
													className={generateBEMClassName({
														block: BEMBlock,
														element: 'error',
													})}
												>
													{errors.email}
												</span>
												<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
													<g fill='none' fillRule='evenodd'>
														<circle cx='10' cy='10' r='10' fill='#FFF' />
														<path fill='#E7816B' d='M11 14v2H9v-2h2zm0-9v7H9V5h2z' />
													</g>
												</svg>
											</>
										)}
									</div>
								</div>
								<div className={generateBEMClassName({ block: BEMBlock, element: 'form-group' })}>
									<input
										type='tel'
										name='phone'
										id='phone'
										className={generateBEMClassName({ block: BEMBlock, element: 'form-input' })}
										placeholder='Phone'
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								<div className={generateBEMClassName({ block: BEMBlock, element: 'form-group' })}>
									<textarea
										name='message'
										id='message'
										className={generateBEMClassName({ block: BEMBlock, element: 'form-input' })}
										placeholder='Your Message (required)'
										onChange={handleChange}
										onBlur={handleBlur}
										style={{ resize: 'none' }}
									/>
									<div className={generateBEMClassName({ block: BEMBlock, element: 'error-container' })}>
										{touched?.message && errors?.message && (
											<>
												<span
													className={generateBEMClassName({
														block: BEMBlock,
														element: 'error',
													})}
												>
													{errors.message}
												</span>
												<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
													<g fill='none' fillRule='evenodd'>
														<circle cx='10' cy='10' r='10' fill='#FFF' />
														<path fill='#E7816B' d='M11 14v2H9v-2h2zm0-9v7H9V5h2z' />
													</g>
												</svg>
											</>
										)}
									</div>
								</div>
								<button type='submit' className={'btn btn--primary'} disabled={!isValid || !Object.keys(touched).length}>
									Submit
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
			<AboutLocations />
		</motion.div>
	);
};

export default Contact;
