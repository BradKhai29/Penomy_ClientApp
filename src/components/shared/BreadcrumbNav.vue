<template>
  <nav
    data-mdb-navbar-init
    class="navbar navbar-expand-lg breadcrumb-container rounded"
  >
    <div class="container-fluid">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb text-capitalize">
          <li class="breadcrumb-item">
            <a href="#" class="red-text">Trang chủ</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#" class="red-text">truyện tranh</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <a href="#" class="red-text">my hero academy</a>
          </li>
        </ol>
      </nav>
    </div>
  </nav>
</template>
<style>

.breadcrumb-container {
  background-color: #4f6f52;
}
.breadcrumb-item a, .breadcrumb-item::before{
  font-family: Arial;
  font-weight: 700;
  font-size: medium;
  color: #f1e6d6 !important;
}
</style>
