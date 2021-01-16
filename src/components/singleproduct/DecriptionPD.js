import React from 'react';

function DecriptionPD() {
  return (
    <section class="product_description_area">
		<div class="container">
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item">
					<a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Mô tả sản phẩm</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
					 aria-selected="false">Kích thước sản phẩm</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
					 aria-selected="false">Bình luận</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					 aria-selected="false">Đánh giá</a>
				</li>
			</ul>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
					<p></p>
					<p></p>
				</div>
				<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					<div class="table-responsive">
						<table class="table">
							
						</table>
					</div>
				</div>
				<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
					<div class="row">
						<div class="col-lg-6">
							<div class="comment_list">
								<div class="review_item">
									<div class="media">
										<div class="d-flex">
											<img  alt=""/>
										</div>
										<div class="media-body">
											<h4>Trương Ván Đức</h4>
											<h5>Ngày 12 tháng 11 năm 1996</h5>
											<a class="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Sản phẩm tốt</p>
								</div>
								<div class="review_item">
									<div class="media">
										<div class="d-flex">
											<img  alt=""/>
										</div>
										<div class="media-body">
											<h4>Trương Ván Đức</h4>
											<h5>Ngày 12 tháng 11 năm 1996</h5>
											<a class="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Sản phẩm tốt</p>
								</div>
								<div class="review_item">
									<div class="media">
										<div class="d-flex">
											<img  alt=""/>
										</div>
										<div class="media-body">
											<h4>Trương Ván Đức</h4>
											<h5>Ngày 12 tháng 11 năm 1996</h5>
											<a class="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Sản phẩm tốt</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="review_box">
								<h4>Post a comment</h4>
								<form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div class="col-md-12">
										<div class="form-group">
											<input type="text" class="form-control" id="name" name="name" placeholder="Your Full name"/>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<input type="email" class="form-control" id="email" name="email" placeholder="Email Address"/>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<input type="text" class="form-control" id="number" name="number" placeholder="Phone Number"/>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<textarea class="form-control" name="message" id="message" rows="1" placeholder="Message"/>
										</div>
									</div>
									<div class="col-md-12 text-right">
										<button type="submit" value="submit" class="btn primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div class="row">
						<div class="col-lg-6">
							<div class="row total_rate">
								<div class="col-6">
									<div class="box_total">
										<h5>Tổng lượt đánh giá</h5>
										<h4>4.0</h4>
										<h6>(03 Reviews)</h6>
									</div>
								</div>
								<div class="col-6">
									<div class="rating_list">
										<h3>Dựa trên đánh giá</h3>
										<ul class="list">
											<li><a href="#">5 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">4 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">3 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">2 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">1 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="review_list">
							<div class="media">
										<div class="d-flex">
											<img  alt=""/>
										</div>
										<div class="media-body">
											<h4>Trương Ván Đức</h4>
											<h5>Ngày 12 tháng 11 năm 1996</h5>
											<a class="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Sản phẩm tốt</p>
									<div class="media">
										<div class="d-flex">
											<img  alt=""/>
										</div>
										<div class="media-body">
											<h4>Trương Ván Đức</h4>
											<h5>Ngày 12 tháng 11 năm 1996</h5>
											<a class="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Sản phẩm tốt</p>
									<div class="media">
										<div class="d-flex">
											<img  alt=""/>
										</div>
										<div class="media-body">
											<h4>Trương Ván Đức</h4>
											<h5>Ngày 12 tháng 11 năm 1996</h5>
											<a class="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Sản phẩm tốt</p>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="review_box">
								<h4>Thêm lượt đánh giá</h4>
								<p>Đánh giá của bạn</p>
								<ul class="list">
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
								</ul>
								<p>Xuất sắc</p>
								<form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div class="col-md-12">
										<div class="form-group">
											<input type="text" class="form-control" id="name" name="name" placeholder="Your Full name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'"/>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<input type="email" class="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'"/>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<input type="text" class="form-control" id="number" name="number" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'"/>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<textarea class="form-control" name="message" id="message" rows="1" placeholder="Review" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"/>
										</div>
									</div>
									<div class="col-md-12 text-right">
										<button type="submit" value="submit" class="primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}

export default DecriptionPD;
