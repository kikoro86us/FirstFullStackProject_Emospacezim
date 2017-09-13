import React, { Component } from 'react';
import Lightboxbt from './../comps/Lightbox' 

class OpeningBook extends Component {
    render() {
        return (
            <div>
                <div className="component">
				<ul className="align">
					<li>
						<figure className='book'>


							<ul className='hardcover_front'>
								<li>
									<div className="coverDesign" id='covercolor'>
										<h1>Wedding</h1>
										<p>Gallery</p>
									</div>
								</li>
								<li></li>
							</ul>


							<ul className='page'>
								<li></li>
								<li>
									<a><Lightboxbt /></a>
								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>


							<ul className='hardcover_back'>
								<li></li>
								<li></li>
							</ul>
							<ul className='book_spine'>
								<li></li>
								<li></li>
							</ul>
							
						</figure>
					</li>
				</ul>
			</div>
	
            </div>
        );
    }
}

export default OpeningBook;