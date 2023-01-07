import { NotificationManager } from 'react-notifications';

export function NotificationInfo() {
  NotificationManager.info(
    "We're sorry, but you've reached the end of search results."
  );
}

export function NotificationError(message) {
  NotificationManager.error(message);
}

export function NotificationWarning() {
  NotificationManager.warning('Please enter your search query.');
}
