// Копирование номера телефона в блоке контактов.
const STUDIO_PHONE = '+79898022026';

document.addEventListener('DOMContentLoaded', () => {
  const phoneButtons = document.querySelectorAll('[data-copy-phone]');
  if (!phoneButtons.length) return;

  document.querySelectorAll('[data-phone-display]').forEach((node) => {
    node.textContent = STUDIO_PHONE;
  });

  phoneButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const status = document.querySelector('#studio-phone-status');
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(STUDIO_PHONE);
        } else {
          const helper = document.createElement('textarea');
          helper.value = STUDIO_PHONE;
          helper.setAttribute('readonly', '');
          helper.style.position = 'fixed';
          helper.style.opacity = '0';
          document.body.appendChild(helper);
          helper.select();
          const copied = document.execCommand('copy');
          helper.remove();
          if (!copied) throw new Error('Clipboard unavailable');
        }
        if (status) status.textContent = 'Номер скопирован в буфер обмена.';
        button.classList.add('is-copied');
        window.setTimeout(() => button.classList.remove('is-copied'), 1200);
      } catch (_) {
        if (status) status.textContent = `Скопируйте номер вручную: ${STUDIO_PHONE}`;
      }
    });
  });
});
