
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





<section class="py-5 section-min-height-full">
    <div class="container">
        <h2 class="mb-4">Academic projects</h2><!-- /.mb-4 -->
       
        <br />

        <div class="row">
            <div class="col-md-4">
                <div class="card mb-5">
                   
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Online search engine</h5>
                                <p class="text-white">
                                    <em>May 2018</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                   
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Basic quiz game using React</h5>
                                <p class="text-white">
                                    <em>April 2018</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                   
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Huffman Encoder and Decoder</h5>
                                <p class="text-white">
                                    <em>January 2017</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                    
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Online search engine</h5>
                                <p class="text-white">
                                    <em>May 2018</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                   
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Basic quiz game using React</h5>
                                <p class="text-white">
                                    <em>April 2018</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                   
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Huffman Encoder and Decoder</h5>
                                <p class="text-white">
                                    <em>January 2017</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                   
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Huffman Encoder and Decoder</h5>
                                <p class="text-white">
                                    <em>January 2017</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                    
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Huffman Encoder and Decoder</h5>
                                <p class="text-white">
                                    <em>January 2017</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
            <div class="col-md-4">
                <div class="card mb-5">
                   
                    <div class="card-body p-0 position-relative">
                        <div class="card-image-overlay bg-dark">
                            <div style="margin:10px">
                                <h5 class="text-white">Huffman Encoder and Decoder</h5>
                                <p class="text-white">
                                    <em>January 2017</em>
                                </p>
                                <p>
                                    <a href="javascript:" class="btn btn-outline-light btn-sm">Read more</a>
                                </p>
                            </div><!-- /.card-image-caption p-3 pt-5 -->
                        </div><!-- /.card-image-overlay bg-dark -->
                        <img src="dist/images/two.jpg" alt="Project image" class="img-fluid mx-auto d-block" style="height:200px; width:100%;"/>
                    </div><!-- /.card-body p-0 position-relative -->
                </div><!-- /.card mb-5 -->
            </div><!-- /.col-md-4 -->
        </div><!-- /.row -->

    </div>
</section>

