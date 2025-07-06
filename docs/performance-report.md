# CSS Performance Notes

- Original `style.css` size: ~6.2 KB.
- Current size after refactor: ~8.3 KB (more variables and comments).
- Added GPU-accelerated transforms and `will-change` hints.
- Introduced `contain` property to reduce layout recalculation.
- Animations respect `prefers-reduced-motion` to avoid unnecessary work on devices.
