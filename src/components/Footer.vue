<template>
    <div class="footer">
        <div class="footer-body container">
            <div class="row">
                <div class="col-lg-3">
                    <img class="footer-image" src="/images/logo-small.webp" loading="lazy" decoding="async" alt="Blockeley">

                    <p class="footer-description">We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with
                                             Mojang Synergies AB, or any of its subsidiaries or its affiliates.</p>

                    <p class="footer-title">Build together.</p>
                </div>

                <div class="footer-text col-lg-6">
                  <p class="footer-description">Follow us on Twitter.</p>

                  <a class="footer-link" target="_blank" href="https://twitter.com/UBlockeley">@UBlockeley</a>
                </div>
            </div>

            <img class="footer-backdrop" src="/images/island.webp" loading="lazy" decoding="async" alt="">
        </div>
    </div>
</template>

<style lang="scss">
.footer {
    padding-bottom: 48px;
    padding-top: 48px;

    background-color: black;

    position: relative;

    .footer-body {
        @media (min-width: 992px) {
            position: relative;

            img.footer-backdrop {
                height: calc(100% + 96px);

                position: absolute;

                right: 0;
                top: -48px;
            }
        }

        @media (max-width: 992px) {
            img.footer-backdrop {
                display: none;
            }
        }
    }

    &::before {
        // Required for pseudo-elements
        content: "";

        height: 4px;
        width: 100%;

        position: absolute;

        top: 2px;
        left: 0;

        background-color: var(--accent-color);
    }

    img.footer-image {
        height: 48px;

        margin-bottom: 16px;

        filter: invert(1);
    }

    p.footer-description {
        font-size: 12px;
        font-weight: 300;
        line-height: 1.25;
        color: rgba(white, 0.5);
    }

    p.footer-title {
        font-size: 12px;
        font-weight: 500;
        color: white;
        line-height: 1;

        margin-top: 16px;
    }

    a.footer-link {
      font-size: 12px;
      font-weight: 500;
      color: rgba(white, 0.75);
      line-height: 1.5;

      margin-top: 8px;

      border-bottom: 2px solid rgba(white, 0.75);

      transition: 100ms;

      &:hover {
        color: white;

        border-color: white;
      }
    }

    .footer-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
}
</style>
