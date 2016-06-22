var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

var Header= React.createClass({
  render : function () {
    return(
      <div>
      <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
      <header id="header">
        <nav className="navbar navbar-default navbar-static-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="index.html"><img src="img/logo.png" alt="logo" /></a>

            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav custom_nav">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="#">Technology</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Mobile</a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Android</a></li>
                    <li><a href="#">Samsung</a></li>
                    <li><a href="#">Nokia</a></li>
                    <li><a href="#">Walton Mobile</a></li>
                    <li><a href="#">Sympony</a></li>
                  </ul>
                </li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="404.html">404 Page</a></li>
              </ul>
            </div>
            <div className="search">
                <a className="search_icon" href="#"><i className="fa fa-search"></i></a>
                <form >
                  <input className="search_bar" type="text" placeholder="Search here" />
                </form>
              </div>
          </div>
        </nav>
      </header>
      </div>
    );
  }
});


var Section = React.createClass({
  render : function () {
    return (
      <div>
      <section id="content">


          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="featured_slider">
               <h2 className="featured_title">It is all about blogging about Technology now!!!</h2>
              <div className="slick_slider">
              <div className="single_iteam">
                <img src="img/300x250.jpg" alt="img" />
                <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>
              <div className="single_iteam">
                <img src="img/300x250x2.jpg" alt="img" />
                <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>
              <div className="single_iteam">
                <img src="img/300x250x3.jpg" alt="img" />
                 <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>
              <div className="single_iteam">
                <img src="img/300x250x4.jpg" alt="img" />
                 <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>

              <div className="single_iteam">
                <img src="img/300x250x5.jpg" alt="img" />
                <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>
              <div className="single_iteam">
                <img src="img/300x250x6.jpg" alt="img" />
                <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>
              <div className="single_iteam">
                <img src="img/300x250x3.jpg" alt="img" />
                 <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>
              <div className="single_iteam">
                <img src="img/300x250x5.jpg" alt="img" />
                 <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
              </div>
              </div>
            </div>
            </div>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="left_sidebar">
                <div className="single_widget">
                  <h2>Post of the month</h2>
                  <ul className="post_nav">
                    <li>
                      <figure className="effect-lily">
                        <a href="single_page.html"><img src="img/270x150x4.jpg" alt="img" /></a>
                        <figcaption>
                          <a href="single_page.html">It’s Now An Android World- Feel The Power</a>
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure className="effect-lily">
                        <a href="single_page.html"><img src="img/270x150x4.jpg" alt="img" /></a>
                        <figcaption>
                          <a href="single_page.html">It’s Now An Android World- Feel The Power</a>
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure className="effect-lily">
                        <a href="single_page.html"><img src="img/270x150x4.jpg" alt="img" /></a>
                        <figcaption>
                          <a href="single_page.html">It’s Now An Android World- Feel The Power</a>
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure className="effect-lily">
                        <a href="single_page.html"><img src="img/270x150x4.jpg" alt="img" /></a>
                        <figcaption>
                          <a href="single_page.html">It’s Now An Android World- Feel The Power</a>
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure className="effect-lily">
                        <a href="single_page.html"><img src="img/270x150x4.jpg" alt="img" /></a>
                        <figcaption>
                          <a href="single_page.html">It’s Now An Android World- Feel The Power</a>
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure className="effect-lily">
                        <a href="single_page.html"><img src="img/270x150x4.jpg" alt="img" /></a>
                        <figcaption>
                          <a href="single_page.html">It’s Now An Android World- Feel The Power</a>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </div>
                <div className="single_widget">
                  <h2>Popular Post</h2>
                  <ul className="ppost_nav wow fadeInDown">
                    <li>
                      <div className="media">
                        <a className="media-left" href="single_page.html">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="single_page.html"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="media">
                        <a className="media-left" href="single_page.html">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="single_page.html">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>

                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="middle_content">
                <h2>What’s Hot</h2>

                <ul className="featured_nav">
                  <li className="wow fadeInDown">
                    <figure className="featured_img">
                        <a href="#"><img src="img/550x400.jpg" alt="img" /></a>
                    </figure>
                    <article className="featured_article">
                      <div className="article_category">
                        <a href="#">Technology <i className="fa fa-angle-right"></i></a>
                        <a href="#">Mobile  <i className="fa fa-angle-right"></i></a>
                        <a href="#">Samsung</a>
                      </div>
                      <h2 className="article_titile"><a href="single_page.html">Apple iPad Production Reaches 4 Million</a></h2>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat...</p>
                    </article>
                  </li>
                  <li className="wow fadeInDown">
                    <figure className="featured_img">
                        <a href="#"><img src="img/550x400.jpg" alt="img" /></a>
                    </figure>
                    <article className="featured_article">
                      <div className="article_category">
                        <a href="#">Technology <i className="fa fa-angle-right"></i></a>
                        <a href="#">Mobile  <i className="fa fa-angle-right"></i></a>
                        <a href="#">Samsung</a>
                      </div>
                      <h2 className="article_titile"><a href="single_page.html">Apple iPad Production Reaches 4 Million</a></h2>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat...</p>
                    </article>
                  </li>
                  <li className="wow fadeInDown">
                    <figure className="featured_img">
                        <a href="#"><img src="img/550x400.jpg" alt="img" /></a>
                    </figure>
                    <article className="featured_article">
                      <div className="article_category">
                        <a href="#">Technology <i className="fa fa-angle-right"></i></a>
                        <a href="#">Mobile  <i className="fa fa-angle-right"></i></a>
                        <a href="#">Samsung</a>
                      </div>
                      <h2 className="article_titile"><a href="single_page.html">Apple iPad Production Reaches 4 Million</a></h2>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat...</p>
                    </article>
                  </li>
                  <li className="wow fadeInDown">
                    <figure className="featured_img">
                        <a href="#"><img src="img/550x400.jpg" alt="img" /></a>
                    </figure>
                    <article className="featured_article">
                      <div className="article_category">
                        <a href="#">Technology <i className="fa fa-angle-right"></i></a>
                        <a href="#">Mobile  <i className="fa fa-angle-right"></i></a>
                        <a href="#">Samsung</a>
                      </div>
                      <h2 className="article_titile"><a href="single_page.html">Apple iPad Production Reaches 4 Million</a></h2>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat...</p>
                    </article>
                  </li>
                  <li className="wow fadeInDown">
                    <figure className="featured_img">
                        <a href="#"><img src="img/550x400.jpg" alt="img" /></a>
                    </figure>
                    <article className="featured_article">
                      <div className="article_category">
                        <a href="#">Technology <i className="fa fa-angle-right"></i></a>
                        <a href="#">Mobile  <i className="fa fa-angle-right"></i></a>
                        <a href="#">Samsung</a>
                      </div>
                      <h2 className="article_titile"><a href="single_page.html">Apple iPad Production Reaches 4 Million</a></h2>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat...</p>
                    </article>
                  </li>
                </ul>
                <nav>
                  <ul className="pagination">
                    <li><a href="#"><span aria-hidden="true">&laquo;</span><span className="sr-only">Previous</span></a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#"><span aria-hidden="true">&raquo;</span><span className="sr-only">Next</span></a></li>
                  </ul>
                </nav>

              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="right_sidebar">
                <div className="single_widget">
                  <h2>Popular Post</h2>
                  <ul className="ppost_nav wow fadeInDown">
                    <li>
                      <div className="media">
                        <a className="media-left" href="single_page.html">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="single_page.html"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="media">
                        <a className="media-left" href="single_page.html">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="single_page.html">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                      <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>

                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <a className="media-left" href="#">
                          <img src="img/70x70.jpg" alt="img" />
                        </a>
                        <div className="media-body">
                          <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="single_widget">
                  <ul className="nav nav-tabs custom-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#recentPost" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true">Recent Post</a></li>
                    <li role="presentation" className=""><a href="#recentComent" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false">Recent Comment</a></li>
                  </ul>
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade active in" id="mostPopular">
                      <ul className="ppost_nav wow fadeInDown">
                        <li>
                          <div className="media">
                            <a className="media-left" href="single_page.html">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="single_page.html"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                         <li>
                          <div className="media">
                            <a className="media-left" href="single_page.html">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="single_page.html">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                         <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>

                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="recentComent">
                      <ul className="ppost_nav wow fadeInDown">
                        <li>
                          <div className="media">
                            <a className="media-left" href="single_page.html">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="single_page.html"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                         <li>
                          <div className="media">
                            <a className="media-left" href="single_page.html">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="single_page.html">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                         <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                          <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>

                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <a className="media-left" href="#">
                              <img src="img/70x70.jpg" alt="img" />
                            </a>
                            <div className="media-body">
                              <a className="catg_title" href="#"> Aliquam malesuada diam eget turpis varius</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single_widget">
                 <h2>Categories</h2>
                 <ul>
                   <li className="cat-item"><a href="#">Technology</a></li>
                   <li className="cat-item"><a href="#">Games</a></li>
                   <li className="cat-item"><a href="#">Business</a></li>
                   <li className="cat-item"><a href="#">Gallery</a></li>
                   <li className="cat-item"><a href="#">Slider</a></li>
                   <li className="cat-item"><a href="#">Life & Style</a></li>
                   <li className="cat-item"><a href="#">Sports</a></li>
                 </ul>
                </div>
                <div className="single_widget">
                 <h2>Category Archive</h2>
                 <select className="catgArchive">
                    <option>Select Category</option>
                    <option>Life styles</option>
                    <option>Sports</option>
                    <option>Technology</option>
                    <option>Treads</option>
                  </select>

                </div>
                <div className="single_widget">
                 <h2>Links</h2>
                 <ul>
                   <li><a href="#">Log in</a></li>
                   <li><a href="#">Entries RSS</a></li>
                   <li><a href="#">Comment RSS</a></li>
                   <li><a href="#">Wordpress.org</a></li>
                 </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
});

var Footer= React.createClass({
render : function(){
return(
<div>
<footer id="footer">
  <div className="footer_top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm3">
          <div className="footer_widget wow fadeInLeftBig">
            <h2>Labels</h2>
            <ul className="labels_nav">
              <li><a href="#">Games</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Slider</a></li>
              <li><a href="#">Life & Style</a></li>
              <li><a href="#">Ver</a></li>
              <li><a href="#">Sports</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm3">
          <div className="footer_widget">
            <h2>Popular Post</h2>
            <ul className="ppost_nav wow fadeInLeftBig">
              <li>
                <div className="media">
                  <a href="single_page.html" className="media-left">
                    <img alt="img" src="img/70x70.jpg" />
                  </a>
                  <div className="media-body">
                    <a href="single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <a href="single_page.html" className="media-left">
                    <img alt="img" src="img/70x70.jpg" />
                  </a>
                  <div className="media-body">
                    <a href="#" className="catg_title"> Aliquam malesuada diam eget turpis varius</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <a href="single_page.html" className="media-left">
                    <img alt="img" src="img/70x70.jpg" />
                  </a>
                  <div className="media-body">
                    <a href="#" className="catg_title"> Aliquam malesuada diam eget turpis varius</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm3">
          <div className="footer_widget wow fadeInRightBig" >
            <h2>Flickr Images</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm3">
          <div className="footer_widget wow fadeInRightBig">
            <h2>Blog Subscription </h2>
            <form className="subscribe_form">
              <p id="subscribe-text">We promise, we will only send you awesome stuff which will make your day!</p>
              <p id="subscribe-email">
                <input type="text" placeholder="Email Address" name="email" />
              </p>
              <p id="subscribe-submit">
                <input type="submit" value="Submit" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_bottom">
    <div className="container">
      <p className="copyright">All rights reserved <a href="index.html">blog Assignment</a></p>
      <p className="developer">Developed By <a href="#" rel="nofollow">blogAssignment</a></p>
    </div>
  </div>
</footer>
</div>
);
}
});


var Home = React.createClass({
render : function () {
  return(
    <div >
    <Header/>
    <Section/>
    <Footer/>
    </div>
  );
}
});


// Main Route
var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
(
<Router history = {browserHistory}>
    <Route path="/" component={Home}>
      </Route>
  </Router>
),
document.getElementById('content')
);
