try {
  throw "";
  throw null;
  throw undefined;
} catch (error: unknown) {
  console.log(getErrorMessage(error));
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
}

window.MyLogger.log();
