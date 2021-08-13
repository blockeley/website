<template>
    <div id="maps">
        <iframe src="https://map.blockeley.com" />

        <div class="maps-sidebar">
          <div class="item active">
            <div class="item-image" />

            <div class="item-text">
              <div class="text-title">Blockeley</div>
              <div class="text-description">Some description</div>
            </div>
          </div>

          <div class="item">
            <div class="item-image" />

            <div class="item-text">
              <div class="text-title">19th-century</div>
              <div class="text-description">Some description</div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Maps"
}
</script>

<style lang="scss">
.navigation-bar {
  display: none;
}

.footer {
  display: none;
}

.notification {
  display: none;
}

#maps {
  display: flex;

  height: 100vh;

  iframe {
    flex-grow: 1;
  }

  .maps-sidebar {
    width: 288px;

    background-color: black;

    padding-top: 24px;
    padding-bottom: 24px;

    padding-right: 12px;
    padding-left: 12px;

    .item {
      padding-right: 12px;
      padding-left: 12px;

      padding-top: 8px;
      padding-bottom: 8px;

      border-radius: 4px;

      &.active {
        background-color: rgba(white, 0.1);

        .item-image {
          background-color: white;
        }
      }

      display: flex;
      align-items: center;

      .item-image {
        height: 32px;
        width: 32px;

        background-color: rgba(white, 0.5);

        border-radius: 16px;

        margin-right: 16px;
      }

      .item-text {
        .text-title {
          font-size: 16px;
          font-weight: 500;
          color: white;
          line-height: 1;
        }

        .text-description {
          font-size: 14px;
          font-weight: 400;
          color: rgba(white, 0.5);
          line-height: 1;
        }
      }

      color: white;
    }


  }
}
</style>