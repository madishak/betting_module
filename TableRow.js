const getBadgeInfo = (info) => {
  if (info === "no-deposit") {
    return { color: "green", text: "Без депозита" };
  } else if (info === "exclusive") {
    return { color: "purple", text: "Эксклюзив" };
  } else if (info === "no-bonus") {
    return { color: "red", text: "Нет бонуса" };
  } else {
    return { color: "", text: "" };
  }
};

const TableRow = (node, ratings) => {
  node.innerHTML = "";

  return (
    ratings &&
    ratings.map(
      ({
        badge,
        bonus_amount,
        external_link,
        internal_link,
        logo,
        rating,
        review_count,
      }) => {
        const tBody = document.createElement("tbody");
        const badgeInfo = getBadgeInfo(badge);

        tBody.innerHTML = `
        <tr>
        <td>
          <div class="ratings__logo">
            <img
              class="ratings__logo"
              src="${logo}"
              alt="${logo.slice(8)}"
            />
            <span class="ratings__logo__badge"></span>
          </div>
        </td>
        <td>
          <a href="${internal_link}" class="ratings__stars__link">
            <div class="ratings__stars">
              <span class="ratings__stars__item"></span>
              <span class="ratings__stars__item"></span>
              <span class="ratings__stars__item"></span>
              <span class="ratings__stars__item"></span>
              <span class="ratings__stars__item"></span>
            </div>
            <span class="ratings__stars__caption">${rating}</span>
          </a>
        </td>
        <td>
          <div class="ratings__comments">
            <span class="ratings__comments__icon"></span>
            <span class="ratings__comments">${review_count}</span>
          </div>
        </td>

        <td>
          <div class="ratings-bonus">
            <div class="ratings-bonus__label--${badgeInfo.color}">${badgeInfo.text}</div>
            <div class="ratings-bonus__inner">
              <span class="ratings-bonus__icon"></span>
              <p class="ratings-bonus__caption">${bonus_amount}K&nbsp;&#8381;</p>
            </div>
          </div>
        </td>
        <td>
          <div class="ratings__btns">
            <a href="${external_link}" class="ratings__btn">обзор</a>
            <a href="${external_link}" class="ratings__btn">сайт</a>
          </div>
        </td>
      </tr>`;

        node.append(tBody);
      }
    )
  );
};

export default TableRow;
